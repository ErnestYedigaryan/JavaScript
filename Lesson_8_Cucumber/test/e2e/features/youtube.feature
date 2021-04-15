@all
Feature: Testing youtube

    Background:
        Given I open "https://www.youtube.com/" url
        When I click "paper-button[aria-label='Sign in']"
            And I enter "protselenium@gmail.com" in "input[type='email']"
            And I hit enter
            And I wait "2" seconds
            And I enter "test2050" in "#password input"
            And I hit enter
            And I wait "5" seconds



    @youtube
    Scenario: Search
        When I enter "me at the zoo" in "input#search"
        Then I wait "1" seconds
        Then I hit enter
            And I wait until "#contents a[title='Me at the zoo']" is visible
            And I click "#contents a[title='Me at the zoo']"
            And I wait "2" seconds
