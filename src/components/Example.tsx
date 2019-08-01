import * as React from 'react';
import { Subject } from 'rxjs';
import useObservable from './useObservable'

export interface IExampleProps {
}

export function Example(props: IExampleProps) {

    const subject: Subject<number> = new Subject<number>();
    const value = useObservable(subject, 0);

    return (
        <>
            <input type="button" onClick={e => subject.next(value === undefined ? 0 : value + 1)} value="Increment" />
            <div>{value}</div>
        </>
    );
}
