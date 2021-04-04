@all
Feature: Testing youtube

    @youtube-search
    Scenario Outline: Search
        Given I open "https://www.youtube.com/" url
        When I enter "<query>" in "input#search"
        And I wait "1" seconds
        Then I hit enter
            And I wait until "#contents a[title='<title>']" is visible
            And I click "#contents a[title='<title>']"
            And I wait "2" seconds

    Examples:
      | query             | title                                   |
      | me at the zoo     | Me at the zoo                           |
      | bmw               | BMW M4 v AMG C63 v Audi RS5 - DRAG RACE |