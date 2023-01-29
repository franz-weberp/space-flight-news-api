<template>
    <div class="container-banner text-center mb-5 d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="row mb-3">
                <div class="col-12">
                    <img 
                        alt="Logo Space Flight News API"
                        title="Logo Space Flight News API"
                        src="../assets/images/snapo-logo-edited.png"
                    />
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <h1 class="title-banner">Space Flight News</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.container-banner {
    background-color: $base-color-orange;
    height: 300px;
}

.title-banner {
    @include font-roboto-condensed-bold;
    color: white;
}
</style>