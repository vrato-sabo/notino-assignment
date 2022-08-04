import axios from 'axios'

export const getCharacters = () =>
  axios
    .get(`https://the-one-api.dev/v2/character?limit=10`, {
      headers: { Authorization: 'Bearer XJeNvYu7cqXCx_VefbDI' },
      // headers: {
      //   Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      // },
    })
    .then((data) => data.data)
