import EnvelopeDTO from "../dtos/envelope-dto";
import LocationData from "../dtos/location-data";
import WeatherData from "../dtos/weather-data-dto";
import api from "./api-service";

const WeatherService = {
  async GetByLocationAsync(locationData: LocationData): Promise<EnvelopeDTO> {
    const envelope: EnvelopeDTO = {
      data: [],
      result: "",
      message: "",
      statusCode: 0,
    };

    try {
      const response: any = await api.post(
        "/weather/GetByLocationAsync",
        locationData
      );
      envelope.data = response.data.data as WeatherData;
      envelope.result = response.data.result;
      envelope.message = response.data.message;
      envelope.statusCode = response.data.statusCode;
    } catch (err) {
      envelope.result = "Network error.";
      envelope.statusCode = 500;
    } finally {
      return envelope;
    }
  },
};

export default WeatherService;
