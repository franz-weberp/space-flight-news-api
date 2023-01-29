<template>
    <div class="bg-navbar py-3">
        <div class="container">
            <div class="row my-3 my-sm-3 my-lg-1">
                <div class="col-1 col-sm-1 col-md-1 col-lg-6 col-xl-7"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 mb-3 mb-sm-3 mb-lg-0">
                    <input 
                        class="row input-search px-3 w-100"
                        @input="searchForTitleArticle"
                        v-model="searchForTitle"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div class="dropdown-search col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                    <div class="dropdown">
                    <button 
                        class="btn btn-outline dropdown-toggle w-100"
                        type="button" 
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Sort
                    </button>
                    <ul class="dropdown-menu w-100">
                        <li @click='sortArticles(true)'>
                            <a class="dropdown-item" href="#">Mais antigas</a>
                        </li>
                        <li @click='sortArticles(false)'>
                            <a class="dropdown-item" href="#">Mais novas</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:() => ({
        sortDefault: false,
        typingTimer: undefined,
        searchForTitle: ''
    }),

    methods: {
        searchForTitleArticle () {
            clearTimeout (this.typingTimer)
            
            this.typingTimer = setTimeout (() => {
                this.$emit("searchFor", this.searchForTitle)
            }, 500)
        },

        sortArticles (sortOrder) {            
            if (sortOrder === this.sortDefault) return
            
            this.sortDefault = sortOrder
            this.$emit("changeSort", this.sortDefault)
        }
    }
}
</script>

<style lang="scss">
.input-search { 
    @include font-roboto-condensed-regular;
    background: white url("../assets/svgs/search.svg") no-repeat right;
    background-position-x: calc(100% - 16px);
    background-size: 16px;

    min-height: 40px; 
    margin-left:0;
}

.input-search:focus {
    border-color: rgba($base-color-orange, 0.7);
    outline: 0 none;
}

.dropdown-search { @include font-roboto-condensed-regular }

.bg-navbar {
    background-color: $base-color-dark;
    color: white;
}

.btn-outline {
    text-transform: uppercase;
    border: 2px solid rgba(#ffffff, 30%);
    color: white;
}

.btn-outline:hover { border: 2px solid white }
</style>