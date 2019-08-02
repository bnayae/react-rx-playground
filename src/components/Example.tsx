import * as React from 'react';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import useObservable from './useObservable'

export interface IExampleProps {
}

export function Example(props: IExampleProps) {

    const subject: Subject<number> = new Subject<number>();
    const value = useObservable(subject, 0);
    const mappedStream: Observable<string> =
        subject.pipe(map((val: number) => `## ${val} ##`));
    const mapped: string | undefined =
        useObservable(mappedStream, undefined);

    return (
        <>
            <input type="button" onClick={e => subject.next(value === undefined ? 0 : value + 1)} value="Increment" />
            <div>{value}</div>
            <div>Mapped: {JSON.stringify(mapped)}</div>
        </>
    );
}
