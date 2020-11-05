// Code your solution here
function findMatching(drivers, str)
{
    return drivers.filter(driver =>
    {
        if (driver.toLowerCase() === str.toLowerCase())
        {
            return driver;
        }
    });
}

function fuzzyMatch(drivers, str)
{
    return drivers.filter(driver =>
    {
        if (driver.substring(0, str.length) === str)
        {
            return driver;
        }
    });
}

function matchName(drivers, str)
{
    return drivers.filter(driver =>
    {
        if (driver.name === str)
        {
            return driver;
        }
    });
}