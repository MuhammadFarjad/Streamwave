import endPoints from '../../redux/constant/endPoints';
import { fetchApi } from '../../utils/helper';

interface IApiResponse {
    [key: string]: any;
}

interface IAuthData {
    [key: string]: any;
}

class UserServices {
    EditProfile = async (data: IAuthData): Promise<IApiResponse> => {
        try {
            console.log('Data------------------------>' )
            console.log('Data', data )
            const response = await fetchApi({
                method: 'POST',
                endPoint: endPoints.EDIT_PROFILE,
                token:true,
                data,
            });
            console.log('API response:', response);
            return response;
        } catch (error) {
            console.error('API error:', error);
            throw error;
        }
    };

    GetProfile = async (data: IAuthData): Promise<IApiResponse> => {
        try {
            console.log('Params------------------------>' )
            console.log('Params' )
            const response = await fetchApi({
                method: 'GET',
                endPoint: endPoints.GET_PROFILE + '/'+ data.userID ,
                token:true,
                data,
            });
            console.log('API response:', response);
            return response;
        } catch (error) {
            console.error('API error:', error);
            throw error;
        }
    };
}



const userServices = new UserServices();
export default userServices;
