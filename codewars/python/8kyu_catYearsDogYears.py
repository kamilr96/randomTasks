'''


	Kata Task
	I have a cat and a dog.

	I got them at the same time as kitten/puppy. That was humanYears years ago.

	Return their respective ages now as [humanYears,catYears,dogYears]

	NOTES:

	humanYears >= 1
	Cat Years
	15 cat years for first year
	+9 cat years for second year
	+4 cat years for each year after that
	Dog Years
	15 dog years for first year
	+9 dog years for second year
	+5 dog years for each year after that
	References

	http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
	http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
	If you liked this Kata there is another related one here




'''


def human_years_cat_years_dog_years(human_years):
    return [human_years,getCatYears(human_years),getDogYears(human_years)]
    
def getDogYears(human_years):
    age = getYearsBetweenZeroAndTwo(human_years)
    return age if age else 24 + 5*(human_years-2)

def getCatYears(human_years):
    age = getYearsBetweenZeroAndTwo(human_years)
    return age if age else 24 + 4*(human_years-2)

def getYearsBetweenZeroAndTwo(human_years):
    if human_years == 1:
        return 15
    elif human_years == 0:
        return 0
    elif human_years == 2:
        return 24
    else:
        return None
