import path from 'path'

const dirname = url => {
    let urlPath = path.dirname(url)
    console.log(urlPath.replace(/^(.{8})/, ''))
    return urlPath.replace(/^(.{8})/, '')
}

export default dirname