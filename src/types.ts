/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SetupCapability {
  type: string;
  capacity: number;
  iconName: string;
}

export interface SalonVenue {
  id: string;
  name: string;
  description: string;
  capacity: number;
  dimensions: string;
  floor: string;
  image: string;
  gallery: string[];
  matterportUrl: string;
  amenities: string[];
  setups: SetupCapability[];
  locationDesc: string;
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
