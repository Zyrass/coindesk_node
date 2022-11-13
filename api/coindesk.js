// dependancie
import axios from "axios";

/**
 * API Coindesk permettant de récuperer 3 devises (eur, usd et gbp)
 * @returns data
 */
async function coindeskAPI() {
  try {
    const response = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
