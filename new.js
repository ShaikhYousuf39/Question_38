"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("karachi", "pakistan");
describe_city("quetta", "pakistan");
describe_city("paris", "france");
