/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SetupCapability {
  type: string;
  typeEn?: string;
  capacity: number;
  iconName: string;
}

export interface SalonVenue {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  capacity: number;
  dimensions: string;
  floor: string;
  floorEn?: string;
  image: string;
  gallery: string[];
  matterportUrl: string;
  amenities: string[];
  amenitiesEn?: string[];
  setups: SetupCapability[];
  locationDesc: string;
  locationDescEn?: string;
}

export interface HotelRoom {
  id: string;
  name: string;
  description: string;
  size: string;
  capacity: number;
  bedType: string;
  image: string;
  gallery: string[];
  amenities: string[];
  features: string[];
}

export interface DiningVenue {
  id: string;
  name: string;
  description: string;
  hours: string;
  cuisine: string;
  image: string;
  gallery: string[];
  features: string[];
  menuHighlights: string[];
}

export interface CorporateEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  services: string[];
}
