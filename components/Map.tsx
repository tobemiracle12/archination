'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

interface MapBoxProps {
  lat: number
  lng: number
}

const MapBox: React.FC<MapBoxProps> = ({ lat, lng }) => {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat], // format MUST be [lng, lat]
      zoom: 13,
    })

    // 🔴 Add Marker to indicate location
    new mapboxgl.Marker({ color: 'red' }).setLngLat([lng, lat]).addTo(map)

    return () => map.remove()
  }, [lat, lng])

  return (
    <div
      className="mb-5 md:h-[400px] h-[300px]"
      ref={mapContainer}
      style={{ width: '100%' }}
    />
  )
}

export default MapBox
