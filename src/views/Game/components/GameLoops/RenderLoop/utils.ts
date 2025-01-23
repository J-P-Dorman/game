import { RenderAction, RenderActionPartial } from "./types";
import { State } from "../../../../../types";
import { includesEvery } from "../../../../../utils";

declare global {
  interface Window {
    state: State;
    scene: any;
  }
}

export const createRenderAction = ({
  id,
  func,
  repeat = false,
  stack = true,
  payload = [],
  pause = false,
  time = 0,
  maxTime = 0,
}: RenderActionPartial): RenderAction => ({
  id,
  func,
  repeat,
  stack,
  payload,
  pause,
  time,
  maxTime,
});

export const pushToRenderQueue = (renderAction: RenderAction) => {
  const { stack } = renderAction;
  const existsInQueue = Boolean(
    window.state.renderQueue.find(
      (queueItem) => queueItem.id === renderAction.id
    )
  );

  if (!existsInQueue || (existsInQueue && stack))
    window.state.renderQueue.push(renderAction);
};

export const removeAllFromRenderQueue = (ids: string[]) => {
  window.state.renderQueue = window.state.renderQueue.filter(
    (renderAction) => !ids.includes(renderAction.id)
  );
};

// TODO: Replace every instance of removeAllFromRenderQueue with this
export const removeAllFromRenderQueue2 = (
  criteria: { id: string; payload?: string[] }[]
) => {
  window.state.renderQueue = window.state.renderQueue.filter(
    (renderAction) =>
      criteria.find(({ id, payload }) => {
        if (!payload || !payload.length) return id !== renderAction.id;
        return (
          id !== renderAction.id ||
          (id === renderAction.id &&
            !includesEvery(renderAction.payload, payload))
        );
      })
  );
};

export const replaceAllInRenderQueue = (
  idFrom: string,
  actionTo: RenderAction
) => {
  removeAllFromRenderQueue([idFrom]);
  pushToRenderQueue(actionTo);
};

export const isInRenderQueue = (id: string, payload?: any[]) => {
  return Boolean(
    window.state.renderQueue.find((action) => {
      if (payload)
        return (
          action.id === id &&
          JSON.stringify(payload) === JSON.stringify(action.payload)
        );
      return action.id === id;
    })
  );
};

export const dispatchRender = (action: RenderAction, payload: any[] = []) => {
  pushToRenderQueue({
    ...action,
    payload,
  });
};

export const renderNow = (action: RenderAction, payload: any[] = []) => {
  const newAction = { ...action, payload };
  action.func({ action: newAction, actionQueue: window.state.renderQueue });
};
