/* линия после 1 карточки */
.benefit-card:nth-child(1)::after {
  content: "" !important;
  display: block !important;

  position: absolute !important;
  right: -32px !important;
  top: 260px !important;

  width: 2px !important;
  height: 150px !important;

  background: rgba(255, 255, 255, 0.72) !important;
}

/* линия после 2 карточки */
.benefit-card:nth-child(2)::after {
  content: "" !important;
  display: block !important;

  position: absolute !important;
  right: -32px !important;
  top: 260px !important;

  width: 2px !important;
  height: 150px !important;

  background: rgba(255, 255, 255, 0.72) !important;
}

/* если нужно ещё ниже — меняй top */
.benefit-card:nth-child(1)::after,
.benefit-card:nth-child(2)::after {
  top: 270px !important;
}
/* HERO — ЛИНИЯ НА ВСЮ ШИРИНУ ПЕРЕД ПОИСКОМ */

#homeHeroSearch {
  position: relative !important;
  margin-top: 95px !important;
}

#homeHeroSearch::before {
  content: "" !important;

  position: absolute !important;
  left: 50% !important;
  top: -42px !important;

  width: 100vw !important;
  height: 5px !important;

  transform: translateX(-50%) !important;

  background: rgba(255, 255, 255, 0.55) !important;
  pointer-events: none !important;
}