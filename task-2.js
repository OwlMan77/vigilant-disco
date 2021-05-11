/**
 *    a) In big O we measure how long a task will take to complete on its worst case scenario by number of items.
 *       This will be O(5n) since we have to go through the array three times to get the result and then loop through the domain object twice to get the length and get the entries
 *
 *     take a count through and create a hash map
 *     log with interpolation
*/


const domains = { // Example to show data shape only.
    "one.com": { policy: "block" },
    "two.com": { policy: "none" },
    "three.com": { policy: "none" },
    "four.com": { policy: "block" },
  }

    const task2b = (domains) => {
        domainKeys = Object.keys(domains);
        let oneDomain = false
        let allDomains = false
        let numberOfBlockedDomains = 0

        for (let i = 0; i < domainKeys.length; i++) {
            domainPolicy = domains[domainKeys[i]].policy
            if (domainPolicy === "block") {
                numberOfBlockedDomains++
                oneDomain = true
            }
        }
        allDomains = numberOfBlockedDomains === domainKeys.length
        return { oneDomain, allDomains };
    }

    console.log(task2b(domains));

    /**
 *    c) .This will be O(2n) since we have to go through the array a single time to get the result and then loop through the domain object once to get the keys
 *       
 *
*/
