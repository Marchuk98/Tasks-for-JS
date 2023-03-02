let a = 1

const createCounter = () =>{

    return () => {
        ++a
        return a
    }
}

const counter1 = createCounter()

counter1()
counter1()

