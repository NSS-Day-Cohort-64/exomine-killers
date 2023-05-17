export const display = async () => {


    return `
       <header>
       <h1>Exomine</h1>
        </header>

        <section class="choose_governor">
            <h2>Choose Governor:</h2>
        ${}
        </section>

        <section class="choose_facility">
            <h2>Choose Facility:</h2>
        ${}
        </section>

        
    `
}