// Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

// For example, suppose your expense report contained the following:

// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

let twoSum = function(nums, target){
    let seen = {}
    let output = []

    for (let i = 0; i < nums.length; i++){
        if (target - nums[i] in seen){
            output.push(nums[i], target-nums[i])
            return output
        } 
        seen[nums[i]] = i
    }
}

nums = [408,
    1614,
    1321,
    1028,
    1018,
    2008,
    1061,
    1433,
    1434,
    1383,
    1645,
    1841,
    1594,
    1218,
    1729,
    1908,
    1237,
    1152,
    1771,
    1837,
    1709,
    1449,
    1876,
    1763,
    1676,
    1491,
    1983,
    1743,
    1845,
    999,
    1478,
    1929,
    1819,
    1385,
    1308,
    1703,
    1246,
    1831,
    1964,
    1469,
    1977,
    1488,
    1698,
    1640,
    1513,
    1136,
    1794,
    1685,
    1802,
    1520,
    1807,
    1654,
    1547,
    1917,
    1792,
    1949,
    1268,
    1626,
    1493,
    1534,
    1700,
    1844,
    1146,
    1049,
    1811,
    1627,
    1630,
    1755,
    1887,
    1290,
    1446,
    1968,
    168,
    1749,
    1479,
    1651,
    1646,
    1839,
    14,
    1918,
    1568,
    1554,
    1926,
    1942,
    1862,
    1966,
    1536,
    1599,
    1439,
    1766,
    1643,
    1045,
    1537,
    1786,
    1596,
    1954,
    1390,
    1981,
    1362,
    1292,
    1573,
    1541,
    1515,
    1567,
    1860,
    1066,
    1879,
    1800,
    1309,
    1533,
    1812,
    1774,
    1119,
    1602,
    1677,
    482,
    1054,
    1424,
    1631,
    1829,
    1550,
    1636,
    1604,
    185,
    1642,
    1304,
    1843,
    1773,
    1667,
    1530,
    1047,
    1584,
    1958,
    1160,
    1570,
    1705,
    1582,
    1692,
    1886,
    1673,
    1842,
    1402,
    1517,
    1805,
    1386,
    1165,
    1867,
    1153,
    1467,
    1473,
    1803,
    1967,
    1485,
    1448,
    1922,
    1258,
    1590,
    1996,
    1208,
    1241,
    1412,
    1610,
    1219,
    523,
    1813,
    1123,
    1916,
    1861,
    1020,
    1783,
    1052,
    1140,
    1994,
    1761,
    747,
    1885,
    1675,
    1957,
    1476,
    1382,
    1878,
    1099,
    1882,
    855,
    1905,
    1037,
    1714,
    1988,
    1648,
    1135,
    1859,
    1798,
    1333,
    1158,
    1909,
    652,
    1934,
    1830,
    1442,
    1224]


let output = twoSum(nums, 2020)
let result = output[0] * output[1]
console.log(result)


// The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

// Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

// In your expense report, what is the product of the three entries that sum to 2020?


let output = []
for(let i = 0; i < nums.length-2; i++){
    let target = 2020 - nums[i]
    let array = nums.slice(i+1)
    let result = twoSum(array, target)

    if (result){
        output.push(nums[i], ...result)
        break
    }
}

console.log(output[0]*output[1]*output[2])