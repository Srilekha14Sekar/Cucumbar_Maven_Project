Feature: Checking the Booking functionality of andAdactin Application
Scenario Outline: Login Functionality
Given user Must Launch The Url
When user Enter "<username>" In The Username Field
And user Enter The "<password>" In The Password Field
Then user Click The Login Button And it NavigateTo Search Hotel Page

Examples:
|username|password|
|abc|123|
|lmn|456|
|xyz|789|
|saikanna|2PJIWP|

@Abc 
Scenario: Search Hotel
When user Select the "Sydney" In The Location Field
And user Select The "Hotel Sunshine" In The Hotel Field
And user Select The "Super Deluxe" In The Roomtype Field
And user Select The "2" In The NoOfRoom Field
And user Select The "3" In The AdultPerRoom
And user Select The "0" In The ChildPerRoom
Then user Click The Search Button And It NavigateTo Select Hotel Page

Scenario: Select Hotel
When user Select The HotelName In The HotelName Field
Then user Click The Continue Button And It NavigateTo Book A Hotel Page

