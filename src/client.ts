import clashApi from 'clash-of-clans-api'
let client = clashApi({
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU4ZThhZGVhLWMxMDctNGVmYy1iZGI5LTdjNmRjZjc1ZDk2NSIsImlhdCI6MTY2Njc0NDIzNywic3ViIjoiZGV2ZWxvcGVyLzZhYzgwMmEyLTA1YzMtYzQxYy02MjVhLTc2MDc2ZDQ1YmU5OSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4MS4xNzQuMTA3LjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.F0y3cTedCTVNS9Pp42iTBtiIRU8ND64q6eXn-D-Rudc6d4nggh79g-6c9cxn6MmkGoheB1qhMSPTgsPJUt99kg', // Optional, can also use COC_API_TOKEN env variable
})

export default client
