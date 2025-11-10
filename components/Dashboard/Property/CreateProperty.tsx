'use client'
import Link from 'next/link'
import { appendForm } from '@/lib/helpers'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import PropertyStore from '@/src/zustand/Property'
import { MessageStore } from '@/src/zustand/Message'

const CreateProperty: React.FC = () => {
  const {
    getProperty,
    setForm,
    resetForm,
    postProperty,
    updateProperty,
    propertyForm,
    loading,
    properties,
  } = PropertyStore()
  const url = '/products'
  const [name, setName] = useState('')
  const { setMessage } = MessageStore()
  const [currentPage] = useState(1)
  const [page_size] = useState(20)
  const [sort] = useState('-createdAt')
  const [feature, setFeature] = useState('')
  const { id } = useParams()
  const router = useRouter()
  const [preview, setPreview] = useState<string | null>(null)
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const fileArray = Array.from(files)

    const previewFiles = fileArray.map((file) => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    })

    PropertyStore.setState((prev) => {
      const existingPictures = Array.isArray(prev.propertyForm.pictures)
        ? prev.propertyForm.pictures
        : prev.propertyForm.pictures
        ? [prev.propertyForm.pictures]
        : []

      return {
        ...prev,
        propertyForm: {
          ...prev.propertyForm,
          pictures: [...existingPictures, ...previewFiles],
        },
      }
    })
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

  const handleFeatures = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value
    setFeature(value)
    if (value.includes(',')) {
      propertyForm.features.push(value.replace(',', ''))
      setForm('features', propertyForm.features)
      setFeature('')
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(name as keyof typeof propertyForm, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    const inputsToValidate = [
      {
        name: 'name',
        value: propertyForm.name,
        rules: { blank: true, maxLength: 100 },
        field: 'Name field',
      },
      {
        name: 'costPrice',
        value: propertyForm.costPrice,
        rules: { blank: true, maxLength: 100 },
        field: 'Cost price field',
      },
      {
        name: 'price',
        value: propertyForm.price,
        rules: { blank: true, maxLength: 100 },
        field: 'Price field',
      },
      {
        name: 'unitPerPurchase',
        value: propertyForm.unitPerPurchase,
        rules: { blank: false, maxLength: 100 },
        field: 'Unit field',
      },
      {
        name: 'purchaseUnit',
        value: propertyForm.purchaseUnit,
        rules: { blank: true, maxLength: 100 },
        field: 'Purchase Unit field',
      },
      {
        name: 'seoTitle',
        value: propertyForm.seoTitle,
        rules: { blank: false, maxLength: 100 },
        field: 'SEO title field',
      },
      {
        name: 'picture',
        value: propertyForm.picture,
        rules: { blank: false, maxLength: 1000 },
        field: 'Picture field',
      },
      {
        name: 'isBuyable',
        value: propertyForm.isBuyable,
        rules: { blank: false, maxLength: 1000 },
        field: 'Picture field',
      },
      {
        name: 'description',
        value: propertyForm.description,
        rules: { blank: false, maxSize: 5000 },
        field: 'Description file',
      },
    ]
    const { messages } = validateInputs(inputsToValidate)
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
    if (id) {
      updateProperty(`${url}/${id}${queryParams}`, data, setMessage, () =>
        router.push(`/admin/products`)
      )
    } else {
      postProperty(`${url}${queryParams}`, data, setMessage, () =>
        router.push(`/admin/products`)
      )
    }
  }

  return (
    <>
      <div className="text">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col items-start bg-[var(--widgetBackground)] p-5">
            <Image
              src="/propertyImage0.jpg"
              sizes="100vw"
              className="h-[300px] w-full object-cover mb-5"
              width={0}
              height={0}
              alt="real"
            />
            {propertyForm.pictures.length > 0 && (
              <div className="grid grid-cols-4 gap-3 mb-6 w-full">
                {PropertyStore.getState().propertyForm.pictures.map(
                  (pic, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[100px] rounded overflow-hidden"
                    >
                      <Image
                        src={typeof pic === 'string' ? pic : pic.preview}
                        sizes="100vw"
                        className="h-full w-full object-cover"
                        width={100}
                        height={100}
                        alt={`property-${index}`}
                      />
                      <i
                        className="bi bi-trash3 absolute bottom-2 right-2 bg-black/50 hover:bg-black text-white cursor-pointer rounded-full p-1 text-[16px] transition-all"
                        onClick={() => handleRemovePicture(index)}
                      ></i>
                    </div>
                  )
                )}
              </div>
            )}

            <label htmlFor="picture" className="homeButton mb-5">
              <input
                className="input-file"
                type="file"
                id="picture"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
              <i className="bi bi-cloud-arrow-up text-2xl mr-2"></i>
              Pictures
            </label>
            <div className="flex mb-5">
              <Link href={'/'} className="flex items-center mr-4 relative">
                <i className="bi bi-file-earmark-pdf mr-2 text-[45px]"></i>
                <i className="bi bi-trash3 absolute top-0 -right-2 text-black cursor-pointer shadow-lg text-[20px]"></i>
                <div className="text-[20px] text-[var(--primaryTextColor)]">
                  demo
                </div>
              </Link>
              <Link href={'/'} className="flex items-center mr-4 relative">
                <i className="bi bi-file-earmark-pdf mr-2 text-[45px]"></i>
                <i className="bi bi-trash3 absolute top-0 -right-2 text-black cursor-pointer shadow-lg text-[20px]"></i>
                <div className="text-[20px] text-[var(--primaryTextColor)]">
                  demo
                </div>
              </Link>
              <Link href={'/'} className="flex items-center mr-4 relative">
                <i className="bi bi-file-earmark-pdf mr-2 text-[45px]"></i>
                <i className="bi bi-trash3 absolute top-0 -right-2 text-black cursor-pointer shadow-lg text-[20px]"></i>
                <div className="text-[20px] text-[var(--primaryTextColor)]">
                  demo
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="contactInput">
                <label className="mb-1" htmlFor="">
                  Select Property Type
                </label>
                <div className="text relative">
                  <div
                    onClick={() => setShowList(!showList)}
                    className="flex mb-3 customInput cursor-pointer"
                  >
                    <div className="text-[15px] mr-4">Property Type</div>
                    <i className="bi bi-caret-down-fill"></i>
                  </div>
                  {showList && (
                    <div className="text border border-[var(--borderColor)] cursor-pointer absolute left-0 w-full top-[49px]">
                      {propertyType.map((item, index) => (
                        <div
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
              <div className="contactInput">
                <label className="mb-1" htmlFor="">
                  Upload Property Documents
                </label>
                <div className="text-white py-3 px-3 bg-[var(--customTextDarkColor)] hover:bg-green-700 tansition transition duration-300 rounded-[5px] mb-10 text-center">
                  Upload
                </div>
              </div>
            </div>
            <div className="border w-full h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254106.01784629122!2d7.09168786206372!3d5.654186360056148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10428e19657129ff%3A0x9431a596167553d9!2sImo!5e0!3m2!1sen!2sng!4v1759995760046!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-start bg-[var(--widgetBackground)] p-5">
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
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Features
              </label>
              <input
                value={feature}
                type="text"
                onChange={handleFeatures}
                placeholder="Enter Property Features"
                className="p-3 border border-gray-200 outline-0 text-black rounded bg-[var(--background)]"
              />
              {propertyForm.features.map((item, index) => (
                <div key={index} className="flex items-center">
                  <i className="bi bi-check-lg text-[20px] mr-1 "></i>
                  <div className="text-[var(--primaryTextColor)] mb-1">
                    {item}
                  </div>
                </div>
              ))}
            </div>
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
        </div>
      </div>
    </>
  )
}

export default CreateProperty
