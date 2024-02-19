const diaInput = document.getElementById('d');
const mesInput = document.getElementById('m');
const anoInput = document.getElementById('y');
const anosResultado = document.getElementById('resultYears');
const mesesResultado = document.getElementById('resultMonths');
const diasResultado = document.getElementById('resultDays');

function calcularIdade() {
  const hoje = new Date();
  const dataNascimento = new Date(anoInput.value, mesInput.value - 1, diaInput.value);

  const diferencaTempo = hoje.getTime() - dataNascimento.getTime();

  const anos = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 365));
  const meses = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const dias = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

  anosResultado.textContent = anos;
  mesesResultado.textContent = meses;
  diasResultado.textContent = dias;
}