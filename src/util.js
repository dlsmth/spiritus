export function getData() {
    let numItems = 20 + Math.floor(20 * Math.random())
    let data = []
    for (let i = 0; i < numItems; i++) {
      data.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random(),
        color: i % 5,
      })
    }
    console.log('data: ', data);
    return data
  }