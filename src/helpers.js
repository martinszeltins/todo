/**
 * Sleep for x seconds
 * 
 * @param delay
 * @return Promise
 */
function sleep(delay)
{
	let sec = delay * 1000

    return new Promise((resolve) => {
        return setTimeout(resolve, sec)
    })
}

export { sleep }