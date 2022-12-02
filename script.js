$(function () {
  const evens = $('#table tr').even();
  const odds = $('#table tr').odd();

  $('#evensButton').click(function () {
    evens.toggleClass('even');
  });
  $('#oddsButton').click(function () {
    odds.toggleClass('odd');
  });
});
