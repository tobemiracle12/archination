import { create } from 'zustand'
import _debounce from 'lodash/debounce'
import apiRequest from '@/lib/axios'

interface FetchResponse {
  message: string
  count: number
  page_size: number
  results: Property[]
  data: Property
}

export interface PropertyDocument {
  name: string
  source: string
  file: File
}

export interface Property {
  _id: string
  name: string
  address: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  features: string[]
  description: string
  documents: PropertyDocument[]
  pictures: (string | PreviewFile)[]
  lng: number
  lat: number
  propertyType: string
  createdAt: Date | null | number
  isChecked?: boolean
  isActive?: boolean
}

export const PropertyEmpty = {
  _id: '',
  name: '',
  address: '',
  price: 0,
  bedrooms: 0,
  bathrooms: 0,
  area: 0,
  features: [],
  description: '',
  documents: [],
  pictures: [],
  lng: 0,
  lat: 0,
  propertyType: '',
  createdAt: 0,
}

interface PropertyState {
  count: number
  page_size: number
  properties: Property[]
  loading: boolean
  selectedProperties: Property[]
  searchedProperties: Property[]
  isAllChecked: boolean
  isForm: boolean
  propertyForm: Property
  showForm: (status: boolean) => void
  setForm: (key: keyof Property, value: Property[keyof Property]) => void
  resetForm: () => void
  getProperty: (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  getProperties: (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  setProcessedResults: (data: FetchResponse) => void
  setLoading?: (loading: boolean) => void
  massDelete: (
    url: string,
    selectedProperties: Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  deleteProperty: (
    url: string,
    setMessage: (message: string, isError: boolean) => void,
    setLoading?: (loading: boolean) => void
  ) => Promise<void>
  updateProperty: (
    url: string,
    updatedItem: FormData | Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void,
    redirect?: () => void
  ) => Promise<void>
  postProperty: (
    url: string,
    data: FormData | Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void,
    redirect?: () => void
  ) => Promise<void>
  toggleChecked: (index: number) => void
  toggleActive: (index: number) => void
  toggleAllSelected: () => void
  reshuffleResults: () => void
  searchProperty: (url: string) => void
}

const PropertyStore = create<PropertyState>((set) => ({
  count: 0,
  page_size: 0,
  properties: [],
  loading: false,
  isForm: false,
  selectedProperties: [],
  searchedProperties: [],
  isAllChecked: false,
  propertyForm: PropertyEmpty,
  setForm: (key, value) =>
    set((state) => ({
      propertyForm: {
        ...state.propertyForm,
        [key]: value,
      },
    })),

  resetForm: () =>
    set({
      propertyForm: PropertyEmpty,
    }),

  setProcessedResults: ({ count, page_size, results }: FetchResponse) => {
    if (results) {
      const updatedResults = results.map((item: Property) => ({
        ...item,
        isChecked: false,
        isActive: false,
      }))

      set({
        count,
        page_size,
        properties: updatedResults,
      })
    }
  },

  setLoading: (loadState: boolean) => {
    set({ loading: loadState })
  },
  showForm: (loadState: boolean) => {
    set({ isForm: loadState })
  },

  getProperties: async (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => {
    try {
      const response = await apiRequest<FetchResponse>(url, {
        setMessage,
        setLoading: PropertyStore.getState().setLoading,
      })
      const data = response?.data
      if (data) {
        PropertyStore.getState().setProcessedResults(data)
      }
    } catch (error: unknown) {
      console.log(error)
    }
  },

  getProperty: async (url, setMessage) => {
    try {
      const response = await apiRequest<FetchResponse>(url, {
        setMessage,
        setLoading: PropertyStore.getState().setLoading,
      })
      const data = response?.data
      if (data) {
        set({ propertyForm: data.data })
      }
    } catch (error: unknown) {
      console.log(error)
    }
  },

  reshuffleResults: async () => {
    set((state) => ({
      properties: state.properties.map((item: Property) => ({
        ...item,
        isChecked: false,
        isActive: false,
      })),
    }))
  },

  searchProperty: _debounce(async (url: string) => {
    const response = await apiRequest<FetchResponse>(url, {
      setLoading: PropertyStore.getState().setLoading,
    })
    const results = response?.data.results
    if (results) {
      set({ searchedProperties: results })
    }
  }, 1000),

  massDelete: async (url, selectedProperties, setMessage) => {
    const response = await apiRequest<FetchResponse>(url, {
      method: 'PATCH',
      body: selectedProperties,
      setMessage,
      setLoading: PropertyStore.getState().setLoading,
    })
    const data = response?.data
    console.log(data)
    if (data) {
      PropertyStore.getState().setProcessedResults(data)
    }
  },

  deleteProperty: async (url, setMessage, setLoading) => {
    const response = await apiRequest<FetchResponse>(url, {
      method: 'DELETE',
      setMessage,
      setLoading,
    })
    const data = response?.data
    if (data) {
      PropertyStore.getState().setProcessedResults(data)
    }
  },

  updateProperty: async (url, updatedItem, setMessage, redirect) => {
    set({ loading: true })
    const response = await apiRequest<FetchResponse>(url, {
      method: 'PATCH',
      body: updatedItem,
      setMessage,
      setLoading: PropertyStore.getState().setLoading,
    })
    if (response?.data) {
      PropertyStore.getState().setProcessedResults(response.data)
    }
    if (redirect) redirect()
  },

  postProperty: async (url, updatedItem, setMessage, redirect) => {
    set({ loading: true })
    const response = await apiRequest<FetchResponse>(url, {
      method: 'POST',
      body: updatedItem,
      setMessage,
      setLoading: PropertyStore.getState().setLoading,
    })
    if (response?.data) {
      PropertyStore.getState().setProcessedResults(response.data)
    }

    if (redirect) redirect()
  },

  toggleActive: (index: number) => {
    set((state) => {
      const isCurrentlyActive = state.properties[index]?.isActive
      const updatedResults = state.properties.map((tertiary, idx) => ({
        ...tertiary,
        isActive: idx === index ? !isCurrentlyActive : false,
      }))
      return {
        properties: updatedResults,
      }
    })
  },

  toggleChecked: (index: number) => {
    set((state) => {
      const updatedResults = state.properties.map((tertiary, idx) =>
        idx === index
          ? { ...tertiary, isChecked: !tertiary.isChecked }
          : tertiary
      )

      const isAllChecked = updatedResults.every(
        (tertiary) => tertiary.isChecked
      )
      const updatedSelectedProperties = updatedResults.filter(
        (tertiary) => tertiary.isChecked
      )

      return {
        properties: updatedResults,
        selectedProperties: updatedSelectedProperties,
        isAllChecked,
      }
    })
  },

  toggleAllSelected: () => {
    set((state) => {
      const isAllChecked =
        state.properties.length === 0 ? false : !state.isAllChecked
      const updatedResults = state.properties.map((item) => ({
        ...item,
        isChecked: isAllChecked,
      }))

      const updatedSelectedProperties = isAllChecked ? updatedResults : []

      return {
        properties: updatedResults,
        selectedProperties: updatedSelectedProperties,
        isAllChecked,
      }
    })
  },
}))

export default PropertyStore
