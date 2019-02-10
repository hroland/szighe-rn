import React from 'react';
import { AsyncStorage } from 'react-native'
import axios from 'axios';
import DeviceInfo from 'react-native-device-info'
const { getDeviceCountry, getBrand, getCarrier, getDeviceId, getDeviceLocale, getDeviceName, getDeviceType, getManufacturer, getModel, getUniqueID, getSystemName, getSystemVersion, isEmulator, isTablet } = DeviceInfo

export const getUUID = () => {
	return getUniqueID();
}

export const deviceInfo = () => {
	return {
		deviceCountry: getDeviceCountry(),
		brand: getBrand(),
		carrier: getCarrier(),
		deviceId: getDeviceId(),
		deviceLocale: getDeviceLocale(),
		deviceName: getDeviceName(),
		deviceType: getDeviceType(),
		manufacturer: getManufacturer(),
		model: getModel(),
		uniqueID: getUniqueID(),
		systemName: getSystemName(),
		systemVersion: getSystemVersion(),
		isEmulator: isEmulator(),
		isTablet: isTablet()
	}
}

const setupFinishedKey = 'SETUP_FINISHED'
const savedConfigKey = 'SAVED_CONFIG'

export const getSetupFinished = async () => {
	return await !!AsyncStorage.getItem(setupFinishedKey)
}

export const getSavedConfig = async () => {
	return JSON.stringify(await AsyncStorage.getItem(savedConfigKey))
}

export const API = axios.create({
	baseURL: `http://10.0.1.13:1600`,
	transformRequest: [function (data, headers) {
    headers.Authorization = getUUID()
    return JSON.stringify(data)
  }],
});