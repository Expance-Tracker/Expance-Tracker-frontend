// Отримати весь стан статистики
export const selectStatistics = (state) => state.statistics;

// Отримати тип транзакцій (income або expense)
export const selectType = (state) => state.statistics.type;

// Отримати період у форматі YYYY-MM
export const selectPeriod = (state) => state.statistics.period;

// Отримати транзакції, згруповані по категоріях (результат з бекенду)
export const selectSummaryByCategory = (state) => state.transactions.items;