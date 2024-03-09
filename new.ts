import { text } from "stream/consumers";

function describe_city(city: string , country: string = `pakistan`): void {
    console.log(`${city} is in ${country}.`);   
}

describe_city(`karachi`,`pakistan`)
describe_city(`quetta`,`pakistan`)
describe_city(`paris`,`france`)

