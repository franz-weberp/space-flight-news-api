<template>
    <div class="modal fade" 
        :id='"infoCompleteArticle-" + modalInfo.id' 
        tabindex="-1" 
        aria-labelledby="modalNews" 
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <button 
                        type="button" 
                        class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    >
                    </button>
                </div>
                <div class="modal-body row m-3">                                         
                    <div class="container-fluid">
                        <div class="row mb-3">
                            <div class="col-12 col-lg mb-3 mb-md-3">
                                <img 
                                    :src='modalInfo.imageUrl'
                                    :alt='articleImageName'
                                    :title='articleImageName'
                                    class="img-fluid"
                                />
                            </div>
                            <div class="col">
                                <h2 
                                    class="font-title fs-5 mb-2" 
                                    id="modalNews"
                                >
                                    {{ modalInfo.title }}
                                </h2>
                                <p class="font-p mb-3">{{ modalInfo.formattedDate }}</p>
                                <p clas="font-p">{{ modalInfo.summary }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mx-0">
                        <a class="btn btn-orange btn-lg" 
                        :href='modalInfo.url' 
                        target="_blank" 
                        role="button"
                        rel="noopener noreferrer"
                        >
                            Ir para o site
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modalInfo: {
            type: Object,
            id: String,
            title: String,
            url: String,
            imageUrl: String,
            summary: String,
            formattedDate: String
        },

        articleImageName: { type: String }
    }
}
</script>