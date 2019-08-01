import { Observable, Subscription } from 'rxjs';
import { useState, useEffect } from 'react';

export default function useObservable<T = number | undefined>(
    observable: Observable<T | undefined>,
    initialState?: T): T | undefined {
    const [state, setState] = useState<T | undefined>(initialState);

    useEffect(() => {
        const subscription: Subscription = observable.subscribe(
            (next: T | undefined) => {
                setState(next);
            },
            error => console.log(error),
            () => setState(undefined));
        return () => subscription.unsubscribe();
    }, [observable])

    return state;
}
