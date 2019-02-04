
## Frontend Developer - Navigate Travel

### SPECIFICATION OF THE TEST
The test is based on building a React web application, which will consume data from an API and display the results on the screen.

The API receives a date as a parameter for search and returns availability dates and other information about options for trips on boats. Each date has information such as temperature and offers **product options (boats)** to choose from, for example: *Premier, Premier Plus & Catamaran*.

The purpose of this test is to build a web interface in React that will receive a date as a parameter to make the call to api, and then display the result on the screen, grouped by dates, containing all product options for each date (price, discount, etc). The result should look something like an "array" that will display all of this information, as shown in the print below:

![Layout](https://i.postimg.cc/sDCqk8N9/Captura-de-tela-de-2019-02-03-17-27-16.png)

### COMMENTS:
1. The purpose and build this interface using components in React.
2. Although not mandatory, it would be interesting to apply some simple design in the solution *(Obviously does not need some design equal to the one shown in the print)*. It is not necessary to display the product images as shown in the image above
3. The web application should receive as input a date that should be passed as parameter for api call.
4. The web application should display the information as described in the image (Date, product, price, availability status and temperature)
5. The **products** returned by the API are representations of boats.
6. Note that the price of each product, represented by the **prices** property is an array. It should always be considered the first price to be displayed.
7. The "RRP" field represents the cost of the product and the value **"RRPWITHDISCOUNT"** returns the value after the discount application. *Important*: The value to be displayed will always be **rrpwithdiscount**, *and if it is different from the original value **(rrp)**, the original value should be crossed out, as noted in the image.*
8. It is not mandatory to use technologies such as Redux to implement the solution.

## API Specifications

URL: [http://api.ntstage.com/v1/bookingsweb/availability?searchDate=2019-02-01&routeId=4&amountResultsAfter=100&amountResultsBefore=0](http://api.ntstage.com/v1/bookingsweb/availability?searchDate=2019-02-01&routeId=4&amountResultsAfter=100&amountResultsBefore=0). 

The **searchDate** parameter must be filled in with the date entered by the user. The other parameters do not need to be changed. See below the list with the fields returned by the API:


Field Name | Description | Type | Sample
---------- | ----------- | ---- | ------
date | Departure date | text | 2018-05-18
dateText | Date text description (day number + month abb) | text | 1 Nov
dateWeekName | Week name abbreviated | text | Sat
tourDate | Tour date with start and end day. | Text | Sun 24 - 1 Jul 2018 
duration | Duration in days | integer | 3 
temperature | Temperature of given date | text | 35°C 
countryId | Country identifier | text | 1
productId | Product Identifier | text | 1 
seasonId | Season identifier | text | 1  
routeId | Route Identifier | text | 1 


|Array of Products: products[] ||||
| ---- | ---- | ---- | ---- |
productClass | Yacht Class | text | Premier
productClassId |  Yacht Class Id  | text | 12
productClassDesc | Abbreviation of yacht class | Text  |  C   - Catamaran<br > P   - Premier<br > P+ - Premier Plus
status | Availability status | text | 1  - Available<br > 2 - Last Spaces<br > 3 - Sold Out<br > 4 - Limited
statusCode | Availability status identifier | integer  | 1  - Available<br> 2 - Last Spaces <br> 3 - Sold Out <br> 4 - Limited
availability | Total number of places available | integer | 8
condition | Rule that evaluate the amount of passengers that can travel in same boat. | integer | 0 - Even<br> 1 - Odd <br>2 - no condition
maxpax | Max passengers allowed according to condition | integer | 5


| Array of Price: prices[]||||
|---|---|---|---|
currencyCode | Currency code | text | GBP
currencySymbol | Currency Symbol | text | £
rrp | Price | integer | 890 
rrpWithDiscount | Price with discount applied | integer | 820
default | Boolean flag that indicates which price should be displayed for users. | boolean | true


## Available Script

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
