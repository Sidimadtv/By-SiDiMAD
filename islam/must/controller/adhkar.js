import { getAdhkar } from "../model/adhkar.js";
import { hideLoadingOverlay } from "../js/common-functions.js";
import * as util from "../js/adhkar.js";
let adhkar = await getAdhkar();
util.setAdhkarCardsSection(adhkar);
util.clickOnFirstAdhkar();
hideLoadingOverlay();
