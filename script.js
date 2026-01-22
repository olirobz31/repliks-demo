// ========== GESTION DES ZONES CLIQUABLES, CARTES MOBILE ET MODAL ==========

document.addEventListener('DOMContentLoaded', function() {

    // Éléments DOM
    const zones = document.querySelectorAll('.zone');
    const mobileCards = document.querySelectorAll('.formation-card');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDescription = document.getElementById('modal-description');
    const modalCta = document.getElementById('modal-cta');

    // ========== FONCTION POUR OUVRIR LE MODAL ==========
    function openModal(formationId) {
        const formation = formations[formationId];

        if (formation) {
            // Remplir le modal avec les données
            modalIcon.textContent = formation.icon;
            modalTitle.textContent = formation.title;
            modalCategory.textContent = formation.category;
            modalDescription.textContent = formation.description;
            modalCta.href = formation.url;

            // Afficher le modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Empêcher le scroll
        }
    }

    // ========== GESTION DES CLICS SUR LES ZONES (Desktop) ==========
    zones.forEach(zone => {
        zone.addEventListener('click', function() {
            const formationId = this.dataset.formation;
            openModal(formationId);
        });
    });

    // ========== GESTION DES CLICS SUR LES CARTES (Mobile) ==========
    mobileCards.forEach(card => {
        card.addEventListener('click', function() {
            const formationId = this.dataset.formation;
            openModal(formationId);
        });
    });

    // ========== FERMETURE DU MODAL ==========
    
    // Fermer avec le bouton X
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Fermer en cliquant en dehors du modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Fermer avec la touche Echap
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

});
