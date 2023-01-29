<template>
    <div class="container">
        <div class="row justify-content-md-center">
        <div class="p-0" id="liveAlertPlaceholder"></div>        
            <article 
                class="col-12 mb-5 p-3 bg-article" 
                v-for='(individualArticle, index) in allArticles' 
                :key='individualArticle.id'
            >
                <div class="row mb-3">
                    <div 
                        :class="[
                            'image-article col-12 col-md', 
                            this.displayArticleImageOnSide (index) 
                        ]"
                    >
                        <img 
                            :src='individualArticle.imageUrl'
                            :alt='this.getNameImageOnArticle (individualArticle.imageUrl)'
                            :title='this.getNameImageOnArticle (individualArticle.imageUrl)'
                            class="img-fluid max-size mb-3 mb-md-0 wx-100"
                        />
                    </div>

                    <div class="col">
                        <h2 class="font-title">{{ individualArticle.title }}</h2>
                        <p class="font-p">{{ individualArticle.formattedDate }} - <strong>{{ individualArticle.newsSite }}</strong></p>
                        <p class="font-p -summary">{{ individualArticle.summary }}</p>
                        <button 
                            :class="[ 'btn btn-orange', this.changeButtonSizeReadMore () ]"

                            type="button" 
                            data-bs-toggle="modal"
                            :data-bs-target='"#infoCompleteArticle-" + individualArticle.id'
                        >
                            Ver Mais
                        </button>
                    </div>
                </div>

                <Modal
                    :modal-info="individualArticle"
                    :article-image-name="this.getNameImageOnArticle (individualArticle.imageUrl)"
                />
            </article>
            
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ButtonLoadMoreArticles @click="loadMoreArticles"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MediaQuery from '../mixins/MediaQuery'
import Modal from './C-Modal.vue'
import ButtonLoadMoreArticles from './C-ButtonLoadMoreArticles.vue'

export default {
    components: {
		Modal,
        ButtonLoadMoreArticles
	},

    mixins: [ MediaQuery ],

    props: {
        articlesParamsSearch: {
            type: Object,
            searchPropTitle: String,
            sortProp: Boolean,
            amountArticles: Number
        }
    },

    data:() => ({
        allArticles: [],
        limitArticlesRequest: 10,
        loadMore: 1,
        sortDefault: false,
    }),

    watch: {
        articlesParamsSearch: {
            handler(paramsToSearch) {
                this.getArticles(
                    Object.values(paramsToSearch)[0], 
                    Object.values(paramsToSearch)[1],
                    Object.values(paramsToSearch)[2]
                )
            }
        }
    },

    methods: {
        getArticles (titleArticle, sortArticle, amountArticles) {
            const spaceFlightNewsApiArticlesAddress = 'https://api.spaceflightnewsapi.net/v3/articles'

            let searchForTitleArticle = titleArticle != '' ? 
                '&title_contains=' + titleArticle : ''

            const requestArticles = spaceFlightNewsApiArticlesAddress + '?_limit=' +
                (amountArticles * this.loadMore) +
                searchForTitleArticle

            fetch(requestArticles)
            .then(articlesResponse => articlesResponse.json())
            .then(articlesResponse => {
                let addFormattedDateToArticle = articlesResponse.map(
                    individualArticleResponse => ({ 
                        ...individualArticleResponse, 
                        formattedDate: this.formatDate(individualArticleResponse.publishedAt)
                    })
                )
                
                this.allArticles = addFormattedDateToArticle
                if (sortArticle) this.allArticles.reverse()

            })

            .catch((error) => { this.fetchErrorMessage(error) })
        },

        fetchErrorMessage (error) {
            const errorMessageUser = '<strong>Opss, houve um erro!</strong> Não foi possível utilizar o realizar a busca no momento, por favor tente mais tarde!'
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                '<div class="alert alert-danger alert-dismissible fade show mb-5" role="alert">',
                `   <div>${ errorMessageUser }</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        },

        loadMoreArticles () {
            this.loadMore++
            this.getArticles (
                this.articlesParamsSearch[0], 
                this.articlesParamsSearch[1], 
                this.articlesParamsSearch[2]
            )
        },

        formatDate (dateToFormat) {
            let completeDate = dateToFormat.split(/[-T]/gm)
            return completeDate = completeDate[2] + '/' + 
                completeDate[1] + '/' + completeDate[0];
        },

        changeButtonSizeReadMore () { return this.isMdBreakPoint ? 'w-100 btn-lg' : '' },

        displayArticleImageOnSide (indexArticles) {
            return indexArticles % 2 == 0 ?
                '' : !this.isMdBreakPoint ? 
                'order-2' : ''
        },

        getNameImageOnArticle (urlFromImageArticle) {
            return urlFromImageArticle.split('/').pop().split('.').shift()           
        }
    },

    created () {
        this.getArticles (
            this.articlesParamsSearch[0], 
            this.articlesParamsSearch[1], 
            this.articlesParamsSearch[2]
        )
    }
}
</script>

<style lang="scss">
.btn-orange {
    @include font-roboto-condensed-regular;
    background-color: $base-color-orange;
    color: white;
    transition: all .1s ease-in-out;
}

.btn-orange:hover {
    background-color: $base-color-orange;
    color: white;
    transform: scale(1.03);
}

.-summary {
    display: -webkit-box;
    overflow: hidden;
    line-clamp: 2;
    -ms-line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>