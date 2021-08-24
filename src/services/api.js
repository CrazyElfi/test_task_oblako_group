const API = {
  getPrograms() {
    return {
      headers: [
        { text: 'Дата начала', value: 'date' },
        { text: 'Название', value: 'title' },
        { text: 'Участников', value: 'numbOfParticipant' },
        { text: 'Тренер', value: 'coach' },
        { text: 'Прогресс', value: 'percentageOfProgress' },
        { text: '', value: 'btn' },
      ],
      program:[
        {
          id: 1,
          date: '23 дек, 9:00',
          title: 'Страхование с заботой о клиенте',
          numbOfParticipant: 12,
          coach: '',
          percentageOfProgress: 95
        },
        {
          id: 2,
          date: '14 ноя, 9:30',
          title: 'Главные правила продаж',
          numbOfParticipant: 10,
          coach: '',
          percentageOfProgress: 91
        },
        {
          id: 3,
          date: '19 окт, 14:30',
          title: 'Первичное обучение КС',
          coach: '',
          numbOfParticipant: 8,
          percentageOfProgress: 86
        },
        {
          id: 4,
          date: '10 окт, 16:00',
          title: 'Вторичное обучение КС',
          numbOfParticipant: 18,
          coach: '',
          percentageOfProgress: 82
        },
        {
          id: 5,
          date: '5 окт, 15:00',
          title: 'Вклады: теория и практика',
          numbOfParticipant: 6,
          coach: '',
          percentageOfProgress: 79
        },
        {
          id: 6,
          date: '27 сен, 11:00',
          title: 'Очное обучение менеджеров',
          numbOfParticipant: 20,
          coach: '',
          percentageOfProgress: 73
        },
      ]
  }},
  getMeetings(programId) { // аля хочет тут переименовать TODO
    const data = [
      [{id:32, name: "Главные правила продаж  Тренинг"},{},{}],
      [{},{},{}],
      [{},{},{}],
    ]
    return data[programId-1]

    // const data = axios.get("/program/"+programId)
    // return data
  }
}
export default API
