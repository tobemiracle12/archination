'use client'
import Link from 'next/link'
import { appendForm, getLocation } from '@/lib/helpers'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import PropertyStore, {
  Picture,
  PropertyDocument,
} from '@/src/zustand/Property'
import { MessageStore } from '@/src/zustand/Message'
import { validateInputArray } from '@/lib/validateInputArray'
import MapBox from '@/components/Map'

type Coordinates = {
  lat: number
  lng: number
}

const CreateProperty: React.FC = () => {
  const {
    getProperty,
    setForm,
    resetForm,
    postProperty,
    updateProperty,
    propertyForm,

    properties,
  } = PropertyStore()
  const url = '/properties'
  const [name, setName] = useState('')
  const [document, setDocument] = useState<PropertyDocument | null>(null)
  const { setMessage } = MessageStore()
  const [currentPage] = useState(1)
  const [page_size] = useState(20)
  const [sort] = useState('-createdAt')
  const [feature, setFeature] = useState('')
  const { id } = useParams()
  const [preview, setPreview] = useState<string | null>(null)
  const [pictures, setPictures] = useState<File[] | null>([])
  const [queryParams] = useState(
    `?page_size=${page_size}&page=${currentPage}&ordering=${sort}`
  )
  const [showList, setShowList] = useState(false)
  const propertyType = ['House', 'Land', 'Furniture', 'Rent']
  useEffect(() => {
    const initialize = async () => {
      if (id) {
        setName(String(name))
        const existingItem = properties.find((item) => item._id === String(id))
        if (existingItem) {
          PropertyStore.setState({ propertyForm: existingItem })
        } else {
          await getProperty(`${url}/${id}`, setMessage)
        }
      }
    }

    initialize()
    return () => {
      resetForm()
    }
  }, [id])

  const handleGetLocation = async () => {
    try {
      const res: Coordinates = await getLocation()
      PropertyStore.setState((prev) => {
        return {
          propertyForm: { ...prev.propertyForm, lat: res.lat, lng: res.lng },
        }
      })
      setMessage('The coordinate has been set', true)
    } catch (err) {
      console.error(err)
    }
  }

  const setPropertyType = (param: string) => {
    PropertyStore.setState((prev) => {
      return {
        propertyForm: { ...prev.propertyForm, propertyType: param },
      }
    })
    setShowList(false)
  }

  const addDocument = () => {
    if (!document) return
    PropertyStore.setState((prev) => {
      return {
        propertyForm: {
          ...prev.propertyForm,
          documents: [...prev.propertyForm.documents, document],
        },
      }
    })
  }

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files
  //   if (!files) return

  //   const fileArray = Array.from(files)

  //   const previewFiles: PropertyDocument[] = fileArray.map((file) => ({
  //     preview: URL.createObjectURL(file),
  //     file: file, // File reference (OK, NOT circular)
  //     name: '',
  //     source: '',
  //   }))

  //   PropertyStore.setState((prev) => {
  //     const existingPictures = Array.isArray(prev.propertyForm.pictures)
  //       ? prev.propertyForm.pictures
  //       : prev.propertyForm.pictures
  //       ? [prev.propertyForm.pictures]
  //       : []

  //     return {
  //       ...prev,
  //       propertyForm: {
  //         ...prev.propertyForm,
  //         pictures: [...existingPictures, ...previewFiles],
  //       },
  //     }
  //   })
  // }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newPictures: Picture[] = Array.from(files).map((file) => ({
      preview: URL.createObjectURL(file),
      file,
      source: undefined,
    }))

    PropertyStore.setState((prev) => ({
      ...prev,
      propertyForm: {
        ...prev.propertyForm,
        pictures: [...prev.propertyForm.pictures, ...newPictures],
      },
    }))
  }

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    const file = files[0]

    setDocument((prev) =>
      prev
        ? { ...prev, file: file }
        : { file: file, source: '', name, preview: '' }
    )
  }

  const handleRemovePicture = (index: number) => {
    PropertyStore.setState((prev) => {
      const updatedPictures = [...prev.propertyForm.pictures]
      const removed = updatedPictures.splice(index, 1)[0]

      // cleanup preview URL if needed
      if (typeof removed !== 'string' && removed.preview) {
        URL.revokeObjectURL(removed.preview)
      }

      return {
        ...prev,
        propertyForm: {
          ...prev.propertyForm,
          pictures: updatedPictures,
        },
      }
    })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(name as keyof typeof propertyForm, value)
  }

  const setDocumentName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value

    setDocument((prev) =>
      prev
        ? { ...prev, name: value }
        : { name: value, source: '', file: null, preview: '' }
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    const inputsToValidate = [
      {
        name: 'name',
        value: propertyForm.name,
        rules: { blank: true, minLength: 10, maxLength: 100 },
        field: 'Name field',
      },
      {
        name: 'address',
        value: propertyForm.address,
        rules: { blank: true, minLength: 10, maxLength: 100 },
        field: 'address field',
      },
      {
        name: 'price',
        value: String(propertyForm.price),
        rules: { blank: true, minLength: 6, maxLength: 100 },
        field: 'Price field',
      },
      {
        name: 'bedrooms',
        value: String(propertyForm.bedrooms),
        rules: { blank: false, maxLength: 100 },
        field: 'bedroom field',
      },
      {
        name: 'bathrooms',
        value: String(propertyForm.bathrooms),
        rules: { blank: true, maxLength: 100 },
        field: 'Purchase Unit field',
      },
      {
        name: 'area',
        value: String(propertyForm.area),
        rules: { blank: false, maxLength: 100 },
        field: 'SEO title field',
      },

      {
        name: 'description',
        value: propertyForm.description,
        rules: { blank: false, minLength: 10, maxLength: 2000 },
        field: 'Description file',
      },

      {
        name: 'documents',
        value: JSON.stringify(propertyForm.documents),
        rules: { blank: false, minLength: 1 },
        field: 'Documents file',
      },
      {
        name: 'lng',
        value: String(propertyForm.lng),
        rules: { blank: false, maxLength: 5000 },
        field: 'Long file',
      },
      {
        name: 'lat',
        value: String(propertyForm.lat),
        rules: { blank: false, maxLength: 5000 },
        field: 'Lat file',
      },
      {
        name: 'propertyType',
        value: propertyForm.propertyType,
        rules: { blank: false, maxLength: 5000 },
        field: 'PropertyType file',
      },
    ]
    const { messages } = validateInputArray(inputsToValidate)
    const getFirstNonEmptyMessage = (
      messages: Record<string, string>
    ): string | null => {
      for (const key in messages) {
        if (messages[key].trim() !== '') {
          return messages[key]
        }
      }
      return null
    }

    const firstNonEmptyMessage = getFirstNonEmptyMessage(messages)
    if (firstNonEmptyMessage) {
      setMessage(firstNonEmptyMessage, false)
      return
    }
    e.preventDefault()
    const data = appendForm(inputsToValidate)
    propertyForm.pictures.forEach((pic) => {
      if (pic.file) {
        data.append('pictures', pic.file)
      }
    })
    if (id) {
      updateProperty(`${url}/${id}`, data, setMessage)
    } else {
      postProperty(`${url}`, data, setMessage)
    }
  }

  return (
    <>
      <div className="text">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col items-start bg-[var(--primaryBackground)] p-5 rounded-xl">
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Property Name
              </label>
              <input
                type="text"
                value={propertyForm.name}
                name="name"
                onChange={handleInputChange}
                placeholder="Enter Property Name"
                className="p-3 border border-gray-200 outline-0 text-black rounded bg-[var(--background)]"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Property Address
              </label>
              <input
                value={propertyForm.address}
                type="text"
                name="address"
                onChange={handleInputChange}
                placeholder="Enter Property Address"
                className="p-3 border border-gray-200 outline-0 text-black rounded bg-[var(--background)]"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Price
              </label>
              <input
                value={propertyForm.price}
                type="number"
                name="price"
                onChange={handleInputChange}
                placeholder="Enter Property Price"
                className="p-3 border border-gray-200 outline-0 text-black rounded bg-[var(--background)]"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Select Property Type
              </label>
              <div className="text relative">
                <div
                  onClick={() => setShowList(!showList)}
                  className="flex mb-3 customInput cursor-pointer"
                >
                  <div className="text-[15px] mr-4">
                    {propertyForm.propertyType
                      ? propertyForm.propertyType
                      : 'Property Type'}
                  </div>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                {showList && (
                  <div className="text border border-[var(--borderColor)] cursor-pointer absolute left-0 w-full top-[49px] bg-[var(--background)]">
                    {propertyType.map((item, index) => (
                      <div
                        onClick={() => setPropertyType(item)}
                        key={index}
                        className="text p-3 border-b border-b-[var(--borderColor)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {propertyForm.propertyType === 'House' && (
              <div className="grid grid-cols-3 gap-3 mb-1">
                <div className="contactInput">
                  <label className="mb-1" htmlFor="">
                    Bedrooms
                  </label>
                  <input
                    value={propertyForm.bedrooms}
                    type="number"
                    name="bedrooms"
                    onChange={handleInputChange}
                    placeholder="Enter Number"
                    className="p-3 border border-gray-200 outline-0 text-black rounded bg-[var(--background)]"
                  />
                </div>
                <div className="contactInput">
                  <label className="mb-1" htmlFor="">
                    Bathrooms
                  </label>
                  <input
                    value={propertyForm.bathrooms}
                    type="number"
                    name="bathrooms"
                    onChange={handleInputChange}
                    placeholder="Enter Number"
                    className="p-3 border border-gray-200 outline-0 text-black rounded bg-[var(--background)]"
                  />
                </div>
                <div className="contactInput">
                  <label className="mb-1" htmlFor="">
                    Area
                  </label>
                  <input
                    value={propertyForm.area}
                    type="number"
                    name="area"
                    onChange={handleInputChange}
                    placeholder="Enter Size"
                    className="p-3 border border-gray-200 outline-0 text-black rounded bg-[var(--background)]"
                  />
                </div>
              </div>
            )}

            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Description
              </label>

              <textarea
                value={propertyForm.description}
                placeholder="Enter Property Description"
                className="p-3 border border-gray-200 outline-0 text-black rounded resize-none min-h-[200px] bg-[var(--background)]"
                name="description"
                id=""
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div onClick={handleSubmit} className="homeButton">
              Submit
            </div>
          </div>
          <div className="flex flex-col items-start bg-[var(--primaryBackground)] p-5">
            {preview && (
              <Image
                src={preview}
                sizes="100vw"
                className="h-[300px] w-full object-cover mb-5"
                width={0}
                height={0}
                alt="real"
              />
            )}

            {propertyForm.pictures && propertyForm.pictures.length > 0 && (
              <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 mb-6 w-full">
                {PropertyStore.getState().propertyForm.pictures.map(
                  (pic, index) => (
                    <div
                      onClick={() =>
                        setPreview(typeof pic === 'string' ? pic : pic.preview)
                      }
                      key={index}
                      className="relative w-full cursor-pointer h-[100px] rounded overflow-hidden"
                    >
                      <Image
                        src={typeof pic === 'string' ? pic : pic.preview}
                        sizes="100vw"
                        className="h-full w-full object-cover"
                        width={100}
                        height={100}
                        alt={`property-${index}`}
                      />
                      <div className="text-[12px] rounded-full flex justify-center items-center-safe transition-all absolute bottom-2 right-2 bg-black/50 hover:bg-black text-white cursor-pointer w-[22px] h-[22px]">
                        <i
                          className="bi bi-trash3"
                          onClick={() => handleRemovePicture(index)}
                        ></i>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            <label htmlFor="picture" className="homeButton mb-5">
              <input
                className="absolute opacity-0 w-0.5 h-0.5"
                type="file"
                id="picture"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
              <i className="bi bi-cloud-arrow-up text-2xl mr-2"></i>
              Pictures
            </label>
            <div className="flex flex-wrap">
              {propertyForm.documents.map((item, index) => (
                <Link
                  key={index}
                  href={'/'}
                  className="flex items-center mr-4 relative mb-4"
                >
                  <i className="bi bi-file-earmark-pdf mr-2 text-[45px]"></i>
                  <i className="bi bi-trash3 absolute top-0 -right-2 text-black cursor-pointer shadow-lg text-[20px]"></i>
                  <div className="text-[20px] text-[var(--primaryTextColor)]">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-3 w-full">
              <div className="contactInput">
                <label className="mb-1" htmlFor="">
                  Document Name
                </label>
                <input
                  type="text"
                  value={document?.name}
                  onChange={setDocumentName}
                  placeholder="Enter Property Name"
                  className="p-3 border border-gray-200 outline-0 text-black rounded bg-[var(--background)]"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="contactInput">
                  <label className="mb-1" htmlFor="">
                    Upload Property Documents
                  </label>
                  <div className="flex gap-3">
                    <label htmlFor="doc" className="homeButton">
                      <input
                        className="absolute opacity-0 w-0.5 h-0.5"
                        type="file"
                        id="doc"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.ppt,.pptx"
                        multiple
                        onChange={handleDocumentChange}
                      />
                      <i className="bi bi-cloud-arrow-up text-2xl mr-2"></i>
                      Pictures
                    </label>
                    <div onClick={addDocument} className="homeButtonSm">
                      Add
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {propertyForm.lat && propertyForm.lng && (
              <MapBox lat={propertyForm.lat} lng={propertyForm.lng} />
            )}
            <div onClick={handleGetLocation} className="homeButton">
              Set Location
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateProperty
