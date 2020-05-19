export const state = () => ({
  bars: [
    {
      id: 1,
      doubleBar: false,
      fill: 'width: 33%',
      cardDescription:
        'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
      barsNumbers: '1 из 3',
      barsAuthor: 'Левада-Центр 2018',
    },
    {
      id: 2,
      doubleBar: false,
      fill: 'width: 2.6%',
      cardDescription: '2,6% Россиян имеют онкозаболевания.',
      barsNumbers: '3 700 000',
      barsAuthor: 'Росстат 2018',
    },
    {
      id: 3,
      doubleBar: true,
      upperWidth: 'width: 55%',
      lowerWidth: 'width: 128%',
      cardDescription:
        'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
      barsNumbers: '↑28%',
      barsAuthor: 'МНИОИ Герцена 2018',
    },
    {
      id: 4,
      doubleBar: true,
      upperWidth: 'width: 70%',
      lowerWidth: 'width: 75%',
      cardDescription:
        'На 25% снизилась смертность в течение первого года после постановки диагноза.',
      barsNumbers: '↓25%',
      barsAuthor: 'МНИОИ Герцена 2018',
    },
  ],
});

export const mutations = {};

export const getters = {
  getBars(state) {
    return state.bars;
  },
};
