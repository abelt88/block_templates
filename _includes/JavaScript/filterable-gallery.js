// Filterable Gallery Script Below - Once per Site
      const gallery = document.querySelectorAll('.filterable-gallery')
    
    gallery.forEach(section => {
      
    
      const filterButtons = section.querySelectorAll('.filter-button')
    
      const gridItems = section.querySelectorAll('.grid-items')
    
      console.log(filterButtons,gridItems)
    
      function filterGallery() {
    
      filterButtons.forEach(button => {
        button.classList.remove('active')
      });
    
      this.classList.add('active')
    
      let target = this.innerHTML.replace(' ','-')

        gridItems.forEach(image => {
          if (image.classList.contains(target)){
            image.classList.remove('hidden')
          }
          else { 
            image.classList.add('hidden')
          }
        } )
      }
    
      filterButtons.forEach(button => {
        button.addEventListener('click', filterGallery)
      });
    
    });