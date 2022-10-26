import client from './src/client'

const main = async () => {
  console.log('test')
  client
    .clanByTag('#2YUC8VGYP')
    .then((response) => console.log(response))
    .catch((err) => console.log(err))

  // const clans = await client
  //   .clans()
  //   .withWarFrequency('always')
  //   .withMinMembers(25)
  //   .fetch()
  // Object.keys(clans).forEach((key) => console.log(key))
  // console.log(clans.items[0])
}

main()
