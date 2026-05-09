const sharedIncludes = {
  legalWarning: `
    <aside class="warning-box">
      <h3>&#9888; HARDCORE MODE ONLY</h3>
      <p>
        Uso restrito a maiores de 18 anos. Se voc&ecirc; tem sensibilidade &agrave; cafe&iacute;na ou hist&oacute;rico card&iacute;aco,
        este produto <strong>N&Atilde;O</strong> &eacute; para voc&ecirc;. Performance exige responsabilidade.
      </p>
    </aside>
  `.trim(),
};

document.querySelectorAll("[data-shared-legal-warning]").forEach((target) => {
  if (!sharedIncludes.legalWarning) {
    console.error("Shared include failed: legalWarning component is not registered.");
    return;
  }

  target.innerHTML = sharedIncludes.legalWarning;
});
