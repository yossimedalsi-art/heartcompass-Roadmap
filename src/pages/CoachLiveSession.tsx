const selectedReveal =
  selectedWorldReveal?.[selectedOptionIndex] || "";

return (
  <div className="coach-panel">
    {selectedReveal && (
      <div className="coach-reveal-card">
        <h3>מה נחשף</h3>
        <p>{selectedReveal}</p>
      </div>
    )}
  </div>
);
