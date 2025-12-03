'use client'
// import { getLocation } from '@/lib/helpers'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { MessageStore } from '@/src/zustand/Message'

import DateOfBirthPicker from '@/components/DateOfBirthPicker'
import { UserStore } from '@/src/zustand/User'
import { useAuthStore } from '@/src/authStore'
import CountryStore, { Country } from '@/src/zustand/place/Country'
import StateStore from '@/src/zustand/place/State'
import AreaStore, { Area } from '@/src/zustand/place/Area'
import { State } from '@/src/zustand/place/StateOrigin'

// type Coordinates = {
//   lat: number
//   lng: number
// }

const VerifyUser: React.FC = () => {
  const { getUser, setForm, resetForm, users, userForm } = UserStore()
  const url = '/properties'
  const [name, setName] = useState('')
  const { setMessage } = MessageStore()
  const { countries, getCountries } = CountryStore()
  const { states, getStates } = StateStore()
  const { area, getArea } = AreaStore()
  const { id } = useParams()
  const [showList, setShowList] = useState(false)
  const [showCountryList, setCountryList] = useState(false)
  const [showStateList, setStateList] = useState(false)
  const [showAreaList, setAreaList] = useState(false)
  const propertyType = ['Male', 'Female']
  const { user } = useAuthStore()

  useEffect(() => {
    const initialize = async () => {
      if (id) {
        setName(String(name))
        const existingItem = users.find((item) => item._id === String(id))
        if (existingItem) {
          UserStore.setState({ userForm: existingItem })
        } else {
          await getUser(`${url}/${id}`, setMessage)
        }
      }
    }

    initialize()
    return () => {
      resetForm()
    }
  }, [id])

  useEffect(() => {
    if (countries.length === 0) {
      getCountries(
        `/places/countries/?country=&page_size=350&field=country&sort=country`,
        setMessage
      )
    }
    if (user) {
      UserStore.setState({ userForm: user })
    }
  }, [user])

  useEffect(() => {
    if (userForm?.residentCountry) {
      getStates(
        `/places/state/?country=${userForm.residentCountry}&page_size=350&field=state&sort=state`,
        setMessage
      )
    }
  }, [userForm.residentCountry])

  useEffect(() => {
    if (userForm?.residentState) {
      getArea(
        `/places/area/?state=${userForm.residentState}&page_size=350&field=area&sort=area`
      )
    }
  }, [userForm.residentState])

  const selectCountry = (country: Country) => {
    setForm('residentCountry', country.country)
    setCountryList(false)
    getStates(
      `/places/state/?country=${country.country}&page_size=350&field=state&sort=state`,
      setMessage
    )
    setForm('residentState', '')
  }

  const selectState = (state: State) => {
    setForm('residentState', state.state)
    setStateList(false)
    getArea(
      `/places/area/?state=${state.state}&page_size=350&field=area&sort=area`
    )
  }

  const selectArea = (area: Area) => {
    setForm('residentArea', area.area)
    setAreaList(false)
  }

  // const handleGetLocation = async () => {
  //   try {
  //     const res: Coordinates = await getLocation()
  //     UserStore.setState((prev) => {
  //       return {
  //         userForm: { ...prev.userForm, userLat: res.lat, userLng: res.lng },
  //       }
  //     })
  //     setMessage('The coordinate has been set', true)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  const selectGender = (param: string) => {
    UserStore.setState((prev) => {
      return {
        userForm: { ...prev.userForm, gender: param },
      }
    })
    setShowList(false)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(name as keyof typeof userForm, value)
  }

  return (
    <>
      <div className="text">
        <div className="flex flex-col items-start bg-[var(--primaryBackground)] p-5 mb-5 rounded-xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 w-full gap-3">
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                First Name
              </label>
              <input
                type="text"
                value={userForm.firstName}
                name="firstName"
                onChange={handleInputChange}
                placeholder="Enter First Name"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Middle Name
              </label>
              <input
                type="text"
                value={userForm.middleName}
                name="middleName"
                onChange={handleInputChange}
                placeholder="Enter Middle Name"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Last Name
              </label>
              <input
                type="text"
                value={userForm.lastName}
                name="lastName"
                onChange={handleInputChange}
                placeholder="Enter Last Name"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Date Of Birth
              </label>
              <DateOfBirthPicker />
            </div>

            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Select Gender
              </label>
              <div className="text relative">
                <div
                  onClick={() => setShowList(!showList)}
                  className="flex mb-3 input cursor-pointer w-full justify-between"
                >
                  <div className="text-[15px] mr-4">
                    {userForm.gender ? userForm.gender : 'Select Gender'}
                  </div>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                {showList && (
                  <div className="text border border-[var(--borderColor)] cursor-pointer absolute left-0 w-full top-[49px] bg-[var(--secondaryBackground)]">
                    {propertyType.map((item, index) => (
                      <div
                        onClick={() => selectGender(item)}
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
                Occupation
              </label>
              <input
                type="text"
                value={userForm.occupation}
                name="occupation"
                onChange={handleInputChange}
                placeholder="Enter Occupation"
                className="input"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-[var(--primaryBackground)] p-5 mb-5 rounded-xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 w-full gap-3">
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Residential Country
              </label>
              <div className="text relative">
                <div
                  onClick={() => setCountryList(!showCountryList)}
                  className="flex mb-3 input cursor-pointer w-full justify-between"
                >
                  <div className="text-[15px] mr-4">
                    {userForm.residentCountry
                      ? userForm.residentCountry
                      : 'Select Country'}
                  </div>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                {showCountryList && (
                  <div className="max-h-[300px] overflow-auto border border-[var(--borderColor)] cursor-pointer absolute left-0 w-full top-[49px] bg-[var(--secondaryBackground)]">
                    {countries.map((item, index) => (
                      <div
                        onClick={() => selectCountry(item)}
                        key={index}
                        className="text p-3 border-b border-b-[var(--borderColor)]"
                      >
                        {item.country}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Residential State
              </label>
              <div className="text relative">
                <div
                  onClick={() => setStateList(!showStateList)}
                  className="flex mb-3 input cursor-pointer w-full justify-between"
                >
                  <div className="text-[15px] mr-4">
                    {userForm.residentState
                      ? userForm.residentState
                      : 'Select State'}
                  </div>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                {showStateList && (
                  <div className="max-h-[300px] overflow-auto border border-[var(--borderColor)] cursor-pointer absolute left-0 w-full top-[49px] bg-[var(--secondaryBackground)]">
                    {states.map((item, index) => (
                      <div
                        onClick={() => selectState(item)}
                        key={index}
                        className="text p-3 border-b border-b-[var(--borderColor)]"
                      >
                        {item.state}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Residential Area
              </label>
              <div className="text relative">
                <div
                  onClick={() => setAreaList(!showAreaList)}
                  className="flex mb-3 input cursor-pointer w-full justify-between"
                >
                  <div className="text-[15px] mr-4">
                    {userForm.residentArea
                      ? userForm.residentArea
                      : 'Select Area'}
                  </div>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                {showAreaList && (
                  <div className="max-h-[300px] overflow-auto border border-[var(--borderColor)] cursor-pointer absolute left-0 w-full top-[49px] bg-[var(--secondaryBackground)]">
                    {area.map((item, index) => (
                      <div
                        onClick={() => selectArea(item)}
                        key={index}
                        className="text p-3 border-b border-b-[var(--borderColor)]"
                      >
                        {item.area}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-[var(--primaryBackground)] p-5 mb-5 rounded-xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 w-full gap-3">
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Residential Country
              </label>
              <div className="text relative">
                <div
                  onClick={() => setCountryList(!showCountryList)}
                  className="flex mb-3 input cursor-pointer w-full justify-between"
                >
                  <div className="text-[15px] mr-4">
                    {userForm.residentCountry
                      ? userForm.residentCountry
                      : 'Select Country'}
                  </div>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                {showCountryList && (
                  <div className="max-h-[300px] overflow-auto border border-[var(--borderColor)] cursor-pointer absolute left-0 w-full top-[49px] bg-[var(--secondaryBackground)]">
                    {countries.map((item, index) => (
                      <div
                        onClick={() => selectCountry(item)}
                        key={index}
                        className="text p-3 border-b border-b-[var(--borderColor)]"
                      >
                        {item.country}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Residential State
              </label>
              <div className="text relative">
                <div
                  onClick={() => setStateList(!showStateList)}
                  className="flex mb-3 input cursor-pointer w-full justify-between"
                >
                  <div className="text-[15px] mr-4">
                    {userForm.residentState
                      ? userForm.residentState
                      : 'Select State'}
                  </div>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                {showStateList && (
                  <div className="max-h-[300px] overflow-auto border border-[var(--borderColor)] cursor-pointer absolute left-0 w-full top-[49px] bg-[var(--secondaryBackground)]">
                    {states.map((item, index) => (
                      <div
                        onClick={() => selectState(item)}
                        key={index}
                        className="text p-3 border-b border-b-[var(--borderColor)]"
                      >
                        {item.state}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Residential Area
              </label>
              <div className="text relative">
                <div
                  onClick={() => setAreaList(!showAreaList)}
                  className="flex mb-3 input cursor-pointer w-full justify-between"
                >
                  <div className="text-[15px] mr-4">
                    {userForm.residentArea
                      ? userForm.residentArea
                      : 'Select Area'}
                  </div>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                {showAreaList && (
                  <div className="max-h-[300px] overflow-auto border border-[var(--borderColor)] cursor-pointer absolute left-0 w-full top-[49px] bg-[var(--secondaryBackground)]">
                    {area.map((item, index) => (
                      <div
                        onClick={() => selectArea(item)}
                        key={index}
                        className="text p-3 border-b border-b-[var(--borderColor)]"
                      >
                        {item.area}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col items-start bg-[var(--primaryBackground)] p-5 rounded-xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 w-full gap-3">
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                First Name
              </label>
              <input
                type="text"
                value={userForm.name}
                name="name"
                onChange={handleInputChange}
                placeholder="Enter First Name"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Middle Name
              </label>
              <input
                type="text"
                value={userForm.name}
                name="name"
                onChange={handleInputChange}
                placeholder="Enter Middle Name"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Last Name
              </label>
              <input
                type="text"
                value={userForm.name}
                name="name"
                onChange={handleInputChange}
                placeholder="Enter Last Name"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Occupation
              </label>
              <input
                type="text"
                value={userForm.name}
                name="name"
                onChange={handleInputChange}
                placeholder="Enter Occupation"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Next Of Kin
              </label>
              <input
                type="text"
                value={userForm.name}
                name="name"
                onChange={handleInputChange}
                placeholder="Enter Next Of Kin"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Next Of Kin Phone Number
              </label>
              <input
                type="text"
                value={userForm.name}
                name="name"
                onChange={handleInputChange}
                placeholder="Enter Next Of Kin Phone Number"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Property Address
              </label>
              <input
                value={userForm.address}
                type="text"
                name="address"
                onChange={handleInputChange}
                placeholder="Enter Property Address"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Price
              </label>
              <input
                value={userForm.price}
                type="number"
                name="price"
                onChange={handleInputChange}
                placeholder="Enter Property Price"
                className="input"
              />
            </div>
            <div className="contactInput">
              <label className="mb-1" htmlFor="">
                Select Property Type
              </label>
              <div className="text relative">
                <div
                  onClick={() => setShowList(!showList)}
                  className="flex mb-3 input cursor-pointer w-full justify-between"
                >
                  <div className="text-[15px] mr-4">
                    {userForm.propertyType
                      ? userForm.propertyType
                      : 'Property Type'}
                  </div>
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                {showList && (
                  <div className="text border border-[var(--borderColor)] cursor-pointer absolute left-0 w-full top-[49px] bg-[var(--secondaryBackground)]">
                    {propertyType.map((item, index) => (
                      <div
                        onClick={() => selectGender(item)}
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
                Description
              </label>

              <textarea
                value={userForm.description}
                placeholder="Enter Property Description"
                className="p-3 border border-gray-200 outline-0 text-black rounded resize-none min-h-[200px] bg-[var(--secondaryBackground)]"
                name="description"
                id=""
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div onClick={handleSubmit} className="homeButton">
              Submit
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default VerifyUser
