require('dotenv').config()
import { PrismaClient } from '@prisma/client'
import client from './src/client'
import mysql from 'mysql2'
const createCsvWriter = require('csv-writer').createObjectCsvWriter

const connection = mysql.createConnection(process.env.DATABASE_URL_SQL!)

connection.connect()

const prisma = new PrismaClient()

const main = async () => {
  // const clans = await client.clans().withWarFrequency('always').fetch()

  // for (const clan of clans.items) {
  //   const clanResponse = await prisma.clan.create({
  //     data: {
  //       tag: clan.tag,
  //       chat_language: clan.chatLanguage?.name,
  //       clan_level: clan.clanLevel,
  //       clan_points: clan.clanPoints,
  //       clan_v_points: clan.clanVersusPoints,
  //       location: clan.location?.name ?? null,
  //       members: clan.members,
  //       required_trophies: clan.requiredTrophies,
  //       type: clan.type,
  //       war_frequency: clan.warFrequency,
  //       war_league: clan.warLeague?.name,
  //       war_win_streak: clan.warWinStreak,
  //       war_wins: clan.warWins
  //     }
  //   })
  //   console.log(clanResponse)
  // }

  // Create a connection to the database

  connection.query('SELECT * FROM Clan', function (err, rows, fields) {
    if (err) throw err

    const jsonData = JSON.parse(JSON.stringify(rows))

    const createCsvWriter = require('csv-writer').createObjectCsvWriter

    const csvWriter = createCsvWriter({
      path: 'clans.csv',
      header: fields.map(field => {
        return {
          id: field.name,
          title: field.name,
        }
      })
    })

    csvWriter
      .writeRecords(jsonData)
      .then(() =>
        console.log('Exportado a clans.csv exitosamente')
      )
  })
}

main()
