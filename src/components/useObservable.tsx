import { Observable, Subscription } from 'rxjs';
import { useState, useEffect } from 'react';

export default function useObservable<T = number>(
    observable: Observable<T>,
    initialState: T,
    complete?: () => T): T {
    const [state, setState] = useState<T>(initialState);

    useEffect(() => {
        const subscription: Subscription = observable.subscribe(
            (next: T) => setState(next),
            error => console.log(error),
            () => complete && setState(complete()));
        return () => subscription.unsubscribe();
    }, [observable, complete])

    return state;
}
