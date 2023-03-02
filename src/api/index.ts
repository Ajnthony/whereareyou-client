import {logger} from 'helpers';

const baseUrl = process.env.BASE_URL;

const Api = async (slug: string, method: string = 'GET', data: any = null) => {
  try {
    const methodsWithData = ['POST', 'PUT', 'PATCH'];
    const reqHasData = methodsWithData.includes(method);
    const headers = reqHasData ? {'Content-Type': 'application/json'} : {};
    const response = await fetch(baseUrl + slug, {
      method,
      headers,
      body: reqHasData && data ? JSON.stringify(data) : null
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    return response
      .json()
      .then((data) => data)
      .catch((error) => {
        throw new Error(error);
      });
  } catch (err) {
    logger(`Error from fetchApi() - slug: ${slug}, method: ${method}`);
    logger('Details:', err);
    return {};
  }
};

export default Api;
