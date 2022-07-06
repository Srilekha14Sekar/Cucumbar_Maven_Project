$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Checking the Booking functionality of andAdactin Application",
  "description": "",
  "id": "checking-the-booking-functionality-of-andadactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Login Functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter \"\u003cusername\u003e\" In The Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"\u003cpassword\u003e\" In The Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button And it NavigateTo Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality;;1"
    },
    {
      "cells": [
        "abc",
        "123"
      ],
      "line": 10,
      "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality;;2"
    },
    {
      "cells": [
        "lmn",
        "456"
      ],
      "line": 11,
      "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality;;3"
    },
    {
      "cells": [
        "xyz",
        "789"
      ],
      "line": 12,
      "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality;;4"
    },
    {
      "cells": [
        "saikanna",
        "2PJIWP"
      ],
      "line": 13,
      "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Login Functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter \"abc\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"123\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button And it NavigateTo Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 16267784800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 12
    }
  ],
  "location": "StepDefination.user_Enter_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 372930300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 190868800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_The_Login_Button_And_it_NavigateTo_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1093754200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login Functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter \"lmn\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"456\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button And it NavigateTo Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 489047400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lmn",
      "offset": 12
    }
  ],
  "location": "StepDefination.user_Enter_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 159024200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 162505400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_The_Login_Button_And_it_NavigateTo_Search_Hotel_Page()"
});
formatter.result({
  "duration": 526027000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login Functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter \"xyz\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"789\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button And it NavigateTo Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 428110000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 12
    }
  ],
  "location": "StepDefination.user_Enter_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 207150900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 184042200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_The_Login_Button_And_it_NavigateTo_Search_Hotel_Page()"
});
formatter.result({
  "duration": 554975200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-andadactin-application;login-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter \"saikanna\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"2PJIWP\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button And it NavigateTo Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 424534300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saikanna",
      "offset": 12
    }
  ],
  "location": "StepDefination.user_Enter_In_The_Username_Field(String)"
});
formatter.result({
  "duration": 184166800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2PJIWP",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_The_In_The_Password_Field(String)"
});
formatter.result({
  "duration": 146649000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_The_Login_Button_And_it_NavigateTo_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1252364600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search Hotel",
  "description": "",
  "id": "checking-the-booking-functionality-of-andadactin-application;search-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Abc"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user Select the \"Sydney\" In The Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user Select The \"Hotel Sunshine\" In The Hotel Field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The \"Super Deluxe\" In The Roomtype Field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select The \"2\" In The NoOfRoom Field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select The \"3\" In The AdultPerRoom",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select The \"0\" In The ChildPerRoom",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Click The Search Button And It NavigateTo Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_the_In_The_Location_Field(String)"
});
formatter.result({
  "duration": 217009900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Sunshine",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_The_In_The_Hotel_Field(String)"
});
formatter.result({
  "duration": 185689200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Super Deluxe",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_The_In_The_Roomtype_Field(String)"
});
formatter.result({
  "duration": 172187300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_The_In_The_NoOfRoom_Field(String)"
});
formatter.result({
  "duration": 313530900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_The_In_The_AdultPerRoom(String)"
});
formatter.result({
  "duration": 302816700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_The_In_The_ChildPerRoom(String)"
});
formatter.result({
  "duration": 162641300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_The_Search_Button_And_It_NavigateTo_Select_Hotel_Page()"
});
formatter.result({
  "duration": 872259800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Select Hotel",
  "description": "",
  "id": "checking-the-booking-functionality-of-andadactin-application;select-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user Select The HotelName In The HotelName Field",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Click The Continue Button And It NavigateTo Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_Select_The_HotelName_In_The_HotelName_Field()"
});
formatter.result({
  "duration": 108879500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_The_Continue_Button_And_It_NavigateTo_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 907749500,
  "status": "passed"
});
});