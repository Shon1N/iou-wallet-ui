import AuthDTO from "../dtos/auth-dto";
import EnvelopeDTO from "../dtos/envelope-dto";
import LoginDTO from "../dtos/login-dto";
import api from "./api-service";

const WeatherService = {
  async LoginAsync(loginDTO: LoginDTO): Promise<EnvelopeDTO> {
    const envelope: EnvelopeDTO = {
      data: null,
      result: "",
      message: "",
      statusCode: 0,
    };

    try {
      const response: any = await api.post("/auth/LoginAsync", loginDTO);
      envelope.data = response.data.data as AuthDTO;
      envelope.result = response.data.result;
      envelope.message = response.data.message;
      envelope.statusCode = response.data.statusCode;
    } catch (err) {
      envelope.result = "Network error.";
      envelope.statusCode = 500;
      console.error("LoginAsync error:", err);
    } finally {
      return envelope;
    }
  },
};

export default WeatherService;
