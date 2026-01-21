// ========== GESTION DES ZONES CLIQUABLES ET DU MODAL ==========

document.addEventListener('DOMContentLoaded', function() {

    // Éléments DOM
    const zones = document.querySelectorAll('.zone');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDescription = document.getElementById('modal-description');
    const modalCta = document.getElementById('modal-cta');

    // ========== GESTION DES CLICS SUR LES ZONES ==========
    zones.forEach(zone => {
        zone.addEventListener('click', function() {
            const formationId = this.dataset.formation;
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
